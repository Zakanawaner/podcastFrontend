//Components
import Tale from './Tale';
//Hooks
import { useGetApiTales } from '../Hooks';


function TaleList() {
    const { data, loading, error } = useGetApiTales('get-tales');
    if (loading) {
        return <p variant='overline'>Cargando...</p>;  
    }
    if (error) {
        return <p variant='overline'>{error.message}</p>;
    }  
    if (data) {
        return data.map((document, index) => (
            <Tale 
                tale={document}
            />
        ))
    }  
    return <p variant='overline'>Error</p>;
}
  
  export default TaleList;