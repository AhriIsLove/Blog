import InfiniteScroll from 'react-infinite-scroll-component';

function InfiniteScrollComponent() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  
  // 초기 데이터 로딩
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    // API에서 데이터 가져오기
    fetch(`/api/items?page=${page}&size=10`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          setHasMore(false);
          return;
        }
        
        setItems(prevItems => [...prevItems, ...data]);
        setPage(prevPage => prevPage + 1);
      });
  };
  
  return (
    <InfiniteScroll
      dataLength={items.length} // 현재 로드된 아이템 개수
      next={fetchData} // 더 불러올 때 실행할 함수
      hasMore={hasMore} // 더 불러올 데이터가 있는지 여부
      loader={<h4>로딩중...</h4>} // 로딩 표시
      endMessage={<p>더 이상 데이터가 없습니다</p>} // 모든 데이터를 불러왔을 때 표시
      scrollThreshold={0.9} // 스크롤이 얼마나 내려갔을 때 새 데이터를 불러올지 (0~1)
    >
      {items.map(item => (
        <div key={item.id} className="item">
          {item.name}
        </div>
      ))}
    </InfiniteScroll>
  );
}