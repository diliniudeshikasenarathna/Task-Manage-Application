export class Task{
    
    title:string;
    description:string;
    status:string;
    createdAt:Date

    constructor(title:string,description:string,status:string,createdAt:Date){
        
        this.title=title;
        this.description=description;
        this.status=status;
        this.createdAt=createdAt;
    }

}