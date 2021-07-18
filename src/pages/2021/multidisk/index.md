---
title: Lets build mini Google Drive clone in few hours
date: '2021-07-17'
spoiler: To achieve that I have used awesome Uploadcare platform
tags: ["sample", "tutorial", "draft"]
---

> TL;DR https://github.com/sergeyt/multidisk

TODO: add cover screenshot

I am going to show you how to quickly build a small Google Drive app powered by [Uploadcare](https://uploadcare.com) platform. I know "Google Drive" may sound a bit provocative, but it is done just to raise some chunk of your attention :smile:. Also believe me or not but I've made the app within one morning. Below is some details about what I've done and how.

## What I've done

In terms of features the app includes the following capabilities:
- Allow managing multiple drives
- Upload, download and deleting files
- At this point I've implemented only [Uploadcare](https://uploadcare.com) drive, but I'd like to add support for Google Drive, Dropbox, etc

You can just briefly watch [this short video](https://www.youtube.com/watch?v=DmwKfIDVKqI&ab_channel=SergeyTodyshev) to have more vision about the features mentioned above.

## Tooling

To build the app I am using the following tools:

- [TypeScript](https://www.typescriptlang.org/)
- [Uploadcare](https://uploadcare.com)
- [Next.js](https://nextjs.org/)
- [Material UI](https://material-ui.com/)

## How I've done this

My steps were:
- Bootstrapping the project
- File System abstraction
- Uploadcare Drive implementation
- Few UI pages

That is it.
### Bootstrapping

Bootstrapping Next.js app is easy peasy. Just run `npx create-next-app` command in your shell and you are done.

### File System abstraction

It is time for reading some code :smile:. I've come up with the following interfaces to abstract any drive and its objects.

```typescript
export type ItemType = "drive" | "folder" | "file";

export interface Item {
  type: ItemType;
  id: string;
  name: string;
}

export interface File extends Item {
  driveId: string;
  size: number;
  createdAt: Date;
  url: string;
}

export interface Folder extends Item {
  getItems(): Promise<Item[]>;
}

export interface Drive extends Folder {
  options: any;
  driveType: string;
  deleteFile(fileId: string): Promise<void>;
}
```

### Uploadcare Drive implementation

Just using [axios](https://github.com/axios/axios) and the [API docs](https://uploadcare.com/api-refs/rest-api/v0.5.0/)

```typescript
import axios, { AxiosResponse } from "axios";
import { Drive, Item, File, ItemType } from "../types";

type Options = {
  type: string;
  id: string;
  name: string;
  publicKey: string;
  secretKey: string;
};

export default class UploadcareDrive implements Drive {
  private _options: Options;

  constructor(options: Options) {
    this._options = options;
  }

  get options(): Options {
    return this._options;
  }

  get driveType() {
    return this.options.type;
  }

  get type(): ItemType {
    return "drive";
  }

  get id() {
    return this.options.id;
  }

  get name() {
    return this.options.name;
  }

  axios() {
    return axios.create({
      headers: {
        Accept: "application/vnd.uploadcare-v0.5+json",
        Authorization: `Uploadcare.Simple ${this.options.publicKey}:${this.options.secretKey}`,
      },
    });
  }

  async getItems(): Promise<Item[]> {
    const resp = await this.axios().get("https://api.uploadcare.com/files/");
    checkResponseOK(resp);
    return resp.data.results.map(
      (f) =>
        ({
          type: "file",
          driveId: this.id,
          id: f.uuid,
          name: f.original_filename,
          createdAt: new Date(f.datetime_uploaded),
          url: f.original_file_url,
          size: f.size,
        } as File)
    );
  }

  async deleteFile(fileId: string): Promise<void> {
    const resp = await this.axios().delete(
      `https://api.uploadcare.com/files/${fileId}/`
    );
    checkResponseOK(resp);
  }
}

function isOK(status: number) {
  return status >= 200 && status < 300;
}

function checkResponseOK(resp: AxiosResponse) {
  if (!isOK(resp.status)) {
    // TODO why JSON.stringify, extract error message please :)
    throw new Error(JSON.stringify(resp.data));
  }
}
```

### Application UI

MVP version of the app has only few pages and few dialogs:
- Home page with list of drives
- Drive detail page with list of files
- New drive dialog
- Confirmation dialog for delete actions

### Home Page

BTW using [SWR](https://nextjs.org/docs/basic-features/data-fetching#swr) for data fetching. Otherwise straightforward implementation:

```typescript
import isEmpty from "lodash/isEmpty";
import useSWR from "swr";
import { getDrives } from "../core/store";
import Loader from "../components/Loader";
import Placeholder from "../components/Placeholder";
import DriveList from "../components/DriveList";

export default function Home() {
  const { data: drives } = useSWR("/drives", getDrives);
  if (!drives) {
    return <Loader />;
  }

  if (isEmpty(drives)) {
    return (
      <Placeholder>
        You don't any drives, but you can create one clicking on ADD DRIVE
        button
      </Placeholder>
    );
  }

  return <DriveList drives={drives} />;
}
```

Where *DriveList* component is:

```typescript
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DriveIcon from "@material-ui/icons/Work";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import List from "@material-ui/core/List";
import { Drive } from "../types";
import DriveMenu from "./DriveMenu";

export default function DriveList({ drives }: { drives: Drive[] }) {
  const items = drives.map((d, k) => (
    <Link href={`/drive/${d.id}`} key={k}>
      <ListItem style={{ cursor: "pointer" }}>
        <ListItemAvatar>
          <Avatar>
            <DriveIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={d.name} secondary={d.driveType} />
        <ListItemSecondaryAction>
          <DriveMenu driveId={d.id} />
        </ListItemSecondaryAction>
      </ListItem>
    </Link>
  ));
  return <List>{items}</List>;
}
```

### Drive View page

```typescript
import { useRouter } from "next/router";
import useSWR from "swr";
import { Box } from "@material-ui/core";
import { Widget } from "@uploadcare/react-widget";
import { getDrive } from "../../core/store";
import Loader from "../../components/Loader";
import ItemList from "../../components/ItemList";

export default function DriveView() {
  const router = useRouter();
  const { id } = router.query;

  const { data, revalidate } = useSWR(`/drive/${id}`, async () => {
    const drive = await getDrive(String(id));
    const items = await drive.getItems();
    return { drive, items };
  });
  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Box m={2} mb={2}>
        <label>Upload a file:&nbsp;</label>
        <Widget
          publicKey={data.drive.options.publicKey}
          onChange={revalidate}
        />
      </Box>
      <ItemList data={data.items} />
    </>
  );
}
```

Where *ItemList* is coded as:

```typescript
import isEmpty from "lodash/isEmpty";
import List from "@material-ui/core/List";
import { Item, File, Folder } from "../types";
import FileItem from "./FileItem";
import FolderItem from "./FolderItem";
import Placeholder from "./Placeholder";

export default function ItemList({ data }: { data: Item[] }) {
  if (isEmpty(data)) {
    return (
      <Placeholder>
        This drive is empty, but you can fill it out with something :)
      </Placeholder>
    );
  }

  const items = data.map((item, k) => {
    switch (item.type) {
      case "file":
        return <FileItem key={k} item={item as File} />;
      case "folder":
        return <FolderItem key={k} item={item as Folder} />;
      default:
        return null;
    }
  });
  return <List>{items}</List>;
}
```

As you might noticed uploading file is implemented just using super [Uploadcare](https://uploadcare.com/docs/integrations/react/#react-file-uploader) widget - another big time saver.

## How I've done Dialogs?

Do you really wanna read the code for dialogs? Maybe it should be enough for this blog post :smile:

Anyway you can be gone to [the github repo](https://github.com/sergeyt/multidisk) and have some fun consuming additional bits of information :smile:

## Next Steps

Next time probably I'll try coding additional features in the application like:

- Google Drive or Dropbox support to be really MultiDisk :smile:
- Folders
