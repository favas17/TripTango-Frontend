
const GoogleMap = ({address}) =>{
    const mapSrc = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

    return(
        <div style={{ width: '99%' }}>
        <iframe
          width="100%"
          height="600"
          style={{ border: 0, top: 0, left: 0,padding: 2 }}
          loading="lazy"
          src={mapSrc}
          title="Google Map"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    )
}

export default GoogleMap;