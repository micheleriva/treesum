<img src="/misc/cover.jpg" />

**Still a work in progress**

# Examples

```js
import { GetAllFilesSum } from 'treesum';

const sums = GetAllFilesSum(".");

console.log(sums);

/*
  [
    {
      Path: "file1.txt",
      Sum: "1ff6c8660a6c841e9d757323810b5bf8"
    },
    {
      Path: "file2.txt",
      Sum: "bb3d0054bf27170a6230aff5b6507f8d"
    },
    ...
  ]
*/
```

# Roadmap

[] Make it work
[] Watch mode
[] Unique checksum of entire directory content

# License
**Treesum** is licensed under the **[GPLv3 license](/LICENSE.md)**