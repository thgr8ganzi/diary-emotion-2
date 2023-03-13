import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log(id)
    return (
        <div>
            <h1>Edit</h1>
            <p>수정페이지</p>
            <button onClick={()=>setSearchParams({who:'winter'})}>QS 바꾸기</button>

            <button onClick={()=>{
                navigate('/home');
            }}>홈으로가기</button>
            <button onClick={()=>{
                navigate(-1);
            }}>뒤로가기</button>
        </div>
    )
}
export default Edit;