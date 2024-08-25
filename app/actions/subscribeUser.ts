'use server'

import { revalidatePath } from 'next/cache';

export async function subscribeUser(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;

  const form = new FormData();
  form.append('address', email);
  form.append('subscribed', 'true');
  form.append('upsert', 'true');

  const listAddress = process.env.MAILGUN_LIST_ADDRESS;
  const username = 'api';
  const password = process.env.MAILGUN_API_KEY;

  try {
    const resp = await fetch(
      `https://api.mailgun.net/v3/lists/${listAddress}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        },
        body: form,
      }
    );

    if (resp.ok) {
      revalidatePath('/');
      return { message: 'Subscription successful!', success: true };
    } else {
      throw new Error('Subscription failed');
    }
  } catch (error) {
    console.error('Error:', error);
    return { message: 'An error occurred. Please try again.', success: false };
  }
}