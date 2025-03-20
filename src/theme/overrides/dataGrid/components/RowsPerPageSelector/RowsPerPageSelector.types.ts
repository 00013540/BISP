export type PerPageOption =
    | number
    | {
          label: string;
          value: number;
      };

export type RowsPerPageSelectorProps = {
    options: readonly PerPageOption[];
    perPage: number;
    onChange: (val: number) => void;
};
