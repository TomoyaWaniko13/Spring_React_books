import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu.tsx';

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  handleSearchChange: () => void;
  category: string;
  setCategory: (category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  handleSearchChange,
  category,
  setCategory,
}) => {
  return (
    <form
      className='flex flex-row justify-start items-center space-x-4 w-full'
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchChange();
      }}
    >
      <Input
        placeholder={'Search'}
        type={'search'}
        className={'max-w-3xl'}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button type='submit'>Search</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'}>Book Category</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Book Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
            <DropdownMenuRadioItem value='all'>All</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='front end'>Front End</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='back end'>Back End</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='data'>Data</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='devops'>DevOps</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </form>
  );
};

export default SearchBar;
