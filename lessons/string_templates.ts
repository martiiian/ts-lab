type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

// таким образом мы можем выковырять значения
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type ReadOrWriteExample = ReadOrWriteBulk<Access>