import { useState } from 'react';
import './index.css';

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);

	const handleClick = (index) => {
		// Jeśli pole jest już zajęte lub gra się skończyła, ignoruj kliknięcie
		if (board[index]) return;

		// Aktualizacja planszy
		const newBoard = [...board];
		newBoard[index] = isXNext ? 'X' : 'O';
		setBoard(newBoard);

		// Zmiana kolejki
		setIsXNext(!isXNext);
	};
	// #348ceb
	const renderSquare = (index) => (
		<button
			className='border-2 text-4xl w-32 h-32 border-red-400'
			onClick={() => handleClick(index)}
		>
			{board[index]}
		</button>
	);

	return (
		<div className='w-full h-screen bg-[#348ceb]'>
			<div className='flex m-auto w-fit justify-center h-full flex-col'>
				<div style={{ display: 'flex' }}>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div style={{ display: 'flex' }}>
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div style={{ display: 'flex' }}>
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
		</div>
	);
}

export default App;
