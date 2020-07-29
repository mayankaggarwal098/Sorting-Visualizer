function Heap()
{
    c_delay=0;
    heap_sort();
}

function swap(i,j)
{
    div_update(div_array[i],div_sizes[i],"red");
    div_update(div_array[j],div_sizes[j],"red");

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(div_array[i],div_sizes[i],"red");
    div_update(div_array[j],div_sizes[j],"red");

    div_update(div_array[i],div_sizes[i],"blue");
    div_update(div_array[j],div_sizes[j],"blue");
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        largest=l;
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        largest=r;
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        div_update(div_array[i],div_sizes[i],"yellow");
        div_update(div_array[0],div_sizes[0],"yellow");
        swap(0,i);
        
        div_update(div_array[i],div_sizes[i],"green");
        div_update(div_array[0],div_sizes[0],"blue");

        max_heapify(i,0);

    }
    div_update(div_array[i],div_sizes[i],"green");
}
