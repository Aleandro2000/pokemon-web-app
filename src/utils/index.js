import Swal from 'sweetalert2';

export const unique=(jsonArr)=>{
    return [...new Set(jsonArr.map(JSON.stringify))].map(JSON.parse);
}

export function pikachu()
{
    Swal.fire(
        'COOL!',
        'You have caught Pikachu!',
        'success'
    );
}