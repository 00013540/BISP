type StatusFilter = {
    label: string;
    value: string;
};

export type StatusFiltersProps = {
    options: StatusFilter[];
    value?: string;
    onChange: (newVal: string) => void;
};
