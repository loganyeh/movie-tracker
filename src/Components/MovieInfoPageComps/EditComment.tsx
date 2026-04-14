

function EditComment(){
    const commentData = [
        {boxicon: <i className='bx bx-edit' ></i>, text: "Write a Review"},
        {boxicon: <i className='bx bx-pencil' ></i>, text: "Edit"}
    ]

    return(
        <>
            {commentData.map((comment, index) => {
                return <div key={index} className="relative py-1 flex justify-center text-white bg-blue-400 rounded">
                    <div className="absolute bottom-0 left-2 text-xl">{comment.boxicon}</div>
                    <div className="text-sm">{comment.text}</div>
                </div>
            })}
        </>
    )
}

export default EditComment;