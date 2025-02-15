export interface category_type {
    image: string;
    head: string;
    heads: string;
    discription: string;
    url: UrlItem[];
  }

export type UrlItem = {
    image: string;
    head: string;
    discription?: string;
    url: string;
  };

export type Planstypes={
    id:number,
    title:string,
    subtitle:string,
    url:string,
}

