import { Button } from '../ui/button.tsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card.tsx';
import SignupOrExploreButtons from '../auth/signup-or-explore-buttons.tsx';

const LibraryService = () => {
  return (
    <div className={'p-20 text-center'}>
      <Card>
        <CardHeader>
          <CardTitle>Can't find what you are looking for?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>If you cannot find what you are looking for, send our library admin's a personal message!</p>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <SignupOrExploreButtons />
        </CardFooter>
      </Card>
    </div>
  );
};

export default LibraryService;
