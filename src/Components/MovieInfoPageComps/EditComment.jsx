

function EditComment(){
    const commentData = [
        {boxicon: <i className='bx bx-edit' ></i>, text: "Write a Review"},
        {boxicon: <i className='bx bx-pencil' ></i>, text: "Edit"}
    ]

    return(
        <>
            <div className="h-auto w-2/3 mb-6">
                {commentData.map((comment, index) => {
                    return <div key={index} className="2xl:h-10 xl:h-8 w-full mb-4 flex bg-blue-400 rounded">
                        <div className="h-full w-1/5 flex justify-center items-center text-white 2xl:text-2xl xl:text-xl">{comment.boxicon}</div>
                        <div className="h-full w-4/5 flex justify-center items-center text-white 2xl:text-xl xl:text-base">{comment.text}</div>
                    </div>
                })}
            </div>
        </>
    )
}

export default EditComment;