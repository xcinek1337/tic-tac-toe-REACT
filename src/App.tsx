import { useState } from 'react';
import './index.css';

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState<boolean>(true);
	const [winner, setWinner] = useState<string>('');

	const winningCombinations = [
		[0, 1, 2], // first row
		[3, 4, 5], // second row
		[6, 7, 8], // third row

		[0, 3, 6], // first column
		[1, 4, 7], // second column
		[2, 5, 8], // third column

		[0, 4, 8], // diagonal1
		[2, 4, 6], // diagonal2
	];
	const checkWinner = (board: string[]) => {
		for (const [a, b, c] of winningCombinations) {
			// IF STATEMENT VVVVVVVVVVVVVVVVVVVVVV
			// cheeck first index of winnin pattern a !== null
			// check if first index is equal to second index a==b
			// check if first index is equal to last index a==c
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				setWinner(board[a]);
			}
		}
		return null;
	};

	const handleClick = (index: number) => {
		if (board[index]) return;

		const newBoard = [...board];
		newBoard[index] = isXNext ? 'X' : 'O';
		setBoard(newBoard);

		checkWinner(newBoard);
		setIsXNext(!isXNext);
	};

	const renderSquare = (index: number) => (
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
				<p className='text-center'>WYGRANA {winner}</p>
			</div>
		</div>
	);
}

export default App;
