const Date = (props) => {
    const date = props.date
    const year = date.getFullYear()
    const month = date.toLocaleString('en-us', {month: 'long'})
    const day = date.toLocaleDateString('en-us', {day: '2-digit'})

    return (
        <div className="comment-date">
        <h2>{year}</h2>
        <h2>{month}</h2>
        <h2>{day}</h2>
    </div>
    )
}

export default Date