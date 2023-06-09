export default function ViewList(list)
{
    const style='font-size:25px;color:white;background-color:grey;margin:2px;padding:3px;width:160px;'
    var str="<div >"
    for(let i=0;i<list.length;i++)
    {
        str=str+`<div style=${style} >`+list[i].itemname+","+list[i].quantity+"</div>"
    }
    str=str+"</div>"
    return str
}