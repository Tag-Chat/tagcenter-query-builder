import { Container } from './styles';

interface ErrorProps {
	error?: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
	return <Container>{error}</Container>;
};

export default Error;
