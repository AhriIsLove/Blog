import { useParams } from 'react-router-dom';

const GamePage = () => {
    // useParams 훅으로 URL 파라미터 가져오기
    const { gameId } = useParams();
    
    // 게임 상세 페이지
    return (
        <div>Game ID: {gameId}</div>
    );
}

export default GamePage;