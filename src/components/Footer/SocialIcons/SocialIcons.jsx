const SocialIcons = ({icons}) => {
  return (
    <div className='socialIconContaier'>
     {
         icons.map(({name,link})=>(
            <span key={name} className='socialIconContent'>
                 <a href={link}><ion-icon name={name}></ion-icon></a>
            </span>
        ))
     }
    </div>
  )
}

export default SocialIcons
