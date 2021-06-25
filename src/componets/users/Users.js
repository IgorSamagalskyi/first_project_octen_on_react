import User from './User'

export default function Users({items, selectUser}){

return(
    <div>
        {
            items.map(users => {
                return <User key={users.id} item={users} selectUser={selectUser}/>
            } )
        }
    </div>
);
}