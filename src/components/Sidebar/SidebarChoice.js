import { Choices } from './style'

export const SidebarChoice = ({title, Icon}) => {
  return (
    <Choices>
        {
           Icon && <Icon/>
        }
       {
          Icon ? <h4>{title}</h4> : <h5>{title}</h5>
       }
    </Choices>
  );
}