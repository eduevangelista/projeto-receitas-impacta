export interface Moment{
  id?: number,
  title: string,
  description: string,
  image: string,
  created_at?: string,
  update_at?: string,
  coments?: [{text: string, username:string}];
}


