export default function Profile({name, imgUrl,children}) {
    
    return (
      <>
        <h2>{name}</h2>
        <img src={imgUrl} />
        {children}
      </>
    );
  }