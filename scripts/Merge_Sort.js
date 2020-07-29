function Merge()
{
    c_delay=0;
    merge_partition(0,array_size-1);
}

function merge(start,mid,end)
{

    var i=0 ,j=0 ,k=0;
    var n1=mid-start+1;
    var n2=end-mid;

    var L=[] , R=[]; 

    for(i=0;i<n1;++i)
    {
        L[i]=div_sizes[start+i];
        div_update(div_array[start+i],div_sizes[start+i],"red");
    }

    for(j=0;j<n2;++j)
    {
        R[j]=div_sizes[mid+1+j];
        div_update(div_array[mid+1+j],div_sizes[mid+1+j],"red");
    }

    i=0;
    j=0;
    k=start;

    while(i<n1 && j<n2)
    {
        
        
        if(L[i]<=R[j])
        {
            
            div_sizes[k]=L[i];
          
            i++;
        }
        else
        {
            
            div_sizes[k]=R[j];
        
            j++;
        }
        div_update(div_array[k],div_sizes[k],"green");
        k++;
    }

    while(i<n1)
    {
        div_sizes[k]=L[i];
        div_update(div_array[k],div_sizes[k],"green");
      
        i++;
        k++;
    }

    while(j<n2)
    {
        div_sizes[k]=R[j];
        div_update(div_array[k],div_sizes[k],"green");
      
        j++;
        k++;
    }
   
}

   
function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(div_array[mid],div_sizes[mid],"yellow");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge(start,mid,end);
    }
}