import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select.tsx';

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  handleSearchChange: () => void;
  category: string;
  handleCategoryChange: (category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  handleSearchChange,
  category,
  handleCategoryChange,
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
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Book Category' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='All'>All</SelectItem>
          <SelectItem value='FE'>Front End</SelectItem>
          <SelectItem value='BE'>Back End</SelectItem>
          <SelectItem value='Data'>Data</SelectItem>
          <SelectItem value='DevOps'>DevOps</SelectItem>
        </SelectContent>
      </Select>
    </form>
  );
};

export default SearchBar;
