import Button from "@components/Button";

export default function Submit({ children, ...rest }){
  return <Button type="submit" { ...rest }>{ children }</Button>
}