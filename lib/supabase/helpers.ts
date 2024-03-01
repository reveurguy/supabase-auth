"use server"
import { createClient } from "./server"

const supabase = createClient()

export async function addData() {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  try {
    const { error } = await supabase
      .from("data")
      .insert([{ uid: user?.id, name: user?.email }])
    if (error) {
      throw new Error(error.message)
    }
    console.log('Data added to the "data" table')
  } catch (error) {
    console.error('Error adding data to the "data" table:', error)
  }
}
