export const Image = (props) => {
    return (
        <div style={{
        }}>
          <img src={props.url} placeholder={props.placeholder ?? ''}
            style={{
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} alt=""
          />
        </div>
    );
}