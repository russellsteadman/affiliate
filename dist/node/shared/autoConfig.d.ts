declare const AutoConfig: () => {
    tags: {
        hosts: string[];
        query: {
            [key: string]: string;
        };
    }[];
} | undefined;
export default AutoConfig;
