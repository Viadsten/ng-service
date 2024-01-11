export interface PostI {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface CommentI {
  postId: number,
  id: number,
  name: string,
  body: string,
  email: string
}

interface AddressI {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

export interface UserI {
  id: number
  name: string
  username: string
  email: string
  address: AddressI,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}
