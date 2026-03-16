

function EditComment(){
    const commentData = [
        {boxicon: <i className='bx bx-edit' ></i>, text: "Write a Review"},
        {boxicon: <i className='bx bx-pencil' ></i>, text: "Edit"}
    ]

    return(
        <>
            <div className="h-auto w-2/3 mb-6">
                {commentData.map((comment, index) => {
                    return <div key={index} className="h-10 w-full mb-4 flex bg-blue-400 rounded">
                        <div className="h-full w-1/5 flex justify-center items-center text-white text-2xl">{comment.boxicon}</div>
                        <div className="h-full w-4/5 flex justify-center items-center text-white text-xl">{comment.text}</div>
                    </div>
                })}
            </div>
        </>
    )
}

export default EditComment;