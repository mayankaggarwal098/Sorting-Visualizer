function Selection()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(div_array[i],div_sizes[i],"red");

        var index_min=i;
        
        for(var j=i+1;j<array_size;j++)
        {
            div_update(div_array[j],div_sizes[j],"yellow");

            if(div_sizes[j]<div_sizes[index_min])
            {
               
                div_update(div_array[index_min],div_sizes[index_min],"blue");
                index_min=j;
                div_update(div_array[index_min],div_sizes[index_min],"red");
            }
            else
            {
                div_update(div_array[j],div_sizes[j],"blue");
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(div_array[index_min],div_sizes[index_min],"red");
            div_update(div_array[i],div_sizes[i],"red");
            div_update(div_array[index_min],div_sizes[index_min],"blue");
        }
        div_update(div_array[i],div_sizes[i],"green");
    }
    div_update(div_array[i],div_sizes[i],"green");
        
}
