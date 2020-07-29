import {GET_ITEMS} from '../actions/actions'
/*
const url = 'http://localhost:4000/products'

function reducerProductList(state=url, action){
    const getItems = async() => await fetch(url).then(res => res.json());
    switch(action.type){
        case GET_ITEMS:
            return{
                useEffect(()=> {
                  const fetchData= async() => {
                    setIsLoading(true);
                    
                    getItems().then(data => setItems(data));
            
              
                   // setData(result.data);
                    setIsLoading(false);
              
                  };
                  fetchData();
                }, [url]);
            };
    }
}*/