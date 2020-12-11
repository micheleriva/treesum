const ref = require("ref")
const ffi = require("ffi")
const Struct = require("ref-struct")
const ArrayType = require("ref-array")
const LongArray = ArrayType(ref.types.longlong)

const GoSlice = Struct({
  data: LongArray,
  len:  "longlong",
  cap: "longlong"
});

const GoString = Struct({
  p: "string",
  n: "longlong"
});

const FileDetailSum = Struct({
  Path: GoString,
	Sum: GoString
});

const treesum = ffi.Library("./dist/treesum.so", {
  GetAllFilesSum: [FileDetailSum, [GoString]]
});

module.exports = treesum