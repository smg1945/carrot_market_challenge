import { Suspense } from 'react';
import { getPerson } from '@/app/functions';
import PersonInfo from '@/components/person-info';
import PersonAssets from '@/components/person-assets';


export async function generateMetadata({params:{id}}:{params:{id:string}}) {
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
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PersonInfo id={id} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <PersonAssets id={id} />
            </Suspense>
        </div>
    )
}