"use server"

import { revalidatePath } from "next/cache";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createNewData(formData) {

    const name = formData.get("name");
    const amount = formData.get("amount");
    const category = formData.get("category");
    const username = formData.get("username");

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify([{name_0:name, amount,category,username}])
    })

    revalidatePath("/")
}

export async function editData(formData){
    const action = formData.get("action");
    const _id = formData.get("_id");
    const name = formData.get("name");
    const amount = formData.get("amount");

    if(action == "delete"){
        deleteData(_id)
    } else {
       updateData({_id,name,amount}) 
    }

    revalidatePath("/");
}

async function updateData({_id,name,amount}) {
    await fetch(API_URL , {
        method: "PUT",
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id,name_0:name,amount})
    })

}

async function deleteData(_id) {
    await fetch(API_URL , {
        method: "DELETE",
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify([_id])
    })
}