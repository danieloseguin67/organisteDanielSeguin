export interface musicModel {
 songId: number,
 songName: string,
 songDescription: string,
 // possible values for songCategory ::= "Popular","Classical","Country","Polka","Christmas","Hockey","Occasion","Guests"
 songCategory: string,
 songLink: string,
 songAuthor: string,
 createdDate:string,
 createdBy: string,
 id: string
}