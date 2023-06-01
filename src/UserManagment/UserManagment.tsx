import React, { useState } from 'react';
import styless from './UserManagment.module.scss'

type cmpType='vigo';
type userType={
    name:string,
        age:number,
        cmp: cmpType
}
const UserManagment: React.FC<{
    isLogin:boolean
}>=({isLogin})=>{

    const [name, setName]=useState<string>('')
    const [age, setAge]=useState<number>(0)
    const [cmp, setCmp]=useState<cmpType>('vigo')

    const userArr:userType[]=[{
        name:'vinay',
        age:22,
        cmp:'vigo'


    }];
    const [dataUser, setDataUser]=useState<userType[]>(userArr)

    const saveData=():void=>{
        
        console.log(name, age, cmp)

        // userArr.push({name, age, cmp});
        const newArr:userType[]=[...dataUser,{name, age, cmp}]
        setDataUser(newArr)

        console.log('userarrr', userArr)
    };

    const userArrData =userArr.map(user =>
        {
            return(
               <div>
                    <p>name:{user.name}</p>
                    <p>age:{user.age}</p>
                    <p>cmp:{user.cmp}</p>
               </div> 
            )

    })

    return(
        <div className={isLogin? styless.main: styless.mainLogout}>
            <input type='text'
             name='name'
             value={name}
             onChange={(e)=>setName(e.target.value)} />
            <input type="number"
             name="age"
             value={age}
             onChange={(e)=>setAge(parseFloat(e.target.value))} />
            <input type="text"
             name='cmp'
             value={cmp}
             onChange={(e)=>{
                const newValue:any=e.target.value;
                setCmp(newValue)
             }} />

            <button onClick={saveData}>submit</button>
            <p>Viany</p>
            {userArrData}
        </div>
    )
}
export default UserManagment;