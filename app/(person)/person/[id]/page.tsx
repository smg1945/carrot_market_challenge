import { Suspense } from 'react';
import PersonInfo, { getPerson } from '@/components/person-info';


export async function genMetadata({params:{id}}:{params:{id:string}}) {
    const person = await getPerson(id)
    return {
        title: person.name
    }
}

export default async function PersonDetail({
    params:{id}
}:{
    params:{id:string}
}) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PersonInfo id={id} />
        </Suspense>
    )
}