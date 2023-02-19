export type Info = {
    name: string;
    cto: string;
    ceo: string;
}

export type InfoCardProps = Omit<Info, 'name'>;