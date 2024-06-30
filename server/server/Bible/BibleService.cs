using MakServer.Bible.models;
using Newtonsoft.Json;

namespace MakServer.Bible
{
    public class BibleService : IBibleService
    {
        public BibleService() { }

        public async Task<Reference> GetRandomReferenceAsync(string version, string testament)
        {
            var tesFolder = "";
            if (testament == "Old") tesFolder = "OT";
            if (testament == "New") tesFolder = "NT";
            if (testament == "Both") tesFolder = GetRandomTestament();

            var bookFolder = tesFolder == "OT" ? GetRandomOTBook() : GetRandomNTBook();

            var book = await GetBookFromFileAsync(version, tesFolder, bookFolder);

            var reference = new Reference();
            if (book != null)
            {
                reference.Book = book.name;
                var (chNum, chapter) = GetRandomChapter(book);
                reference.Chapter = chNum.ToString();
                var (vsNum, text) = GetRandomVerse(chapter);
                reference.Verse = vsNum.ToString();
                reference.Text = text;
            }
            return reference;
        }

        private (int, string) GetRandomVerse(Chapter chapter)
        {
            var verses = int.Parse(chapter.text.Max(v => v.ID));
            var vsNum = new Random().Next(1, verses);
            var verseTexts = chapter.text.Where(v => v.ID == vsNum.ToString()).Select(v => v.text).ToList();
            var text = string.Join(" ", verseTexts).Replace("\\", "");
            return (vsNum, text);
        }

        private (int, Chapter) GetRandomChapter(Book book)
        {
            var chapters = book.text.Length;
            var chIndex = new Random().Next(chapters);
            var chapter = book.text.ElementAt(chIndex);
            return (chIndex + 1, chapter);
        }

        private string GetRandomTestament()
        {
            var ntProb = .25;
            var ranNum = new Random().Next();
            var testament = ranNum <= ntProb ? "NT" : "OT";
            return testament;
        }

        private string GetRandomNTBook()
        {
            var ranNum = new Random().Next(26);
            switch (ranNum)
            {
                case 0: return "1CO";
                case 1: return "1JN";
                case 2: return "1PE";
                case 3: return "1TH";
                case 4: return "1TI";
                case 5: return "2CO";
                case 6: return "2JN";
                case 7: return "2PE";
                case 8: return "2TH";
                case 9: return "2TI";
                case 10: return "3JN";
                case 11: return "ACT";
                case 12: return "COL";
                case 13: return "EPH";
                case 14: return "GAL";
                case 15: return "HEB";
                case 16: return "JAS";
                case 17: return "JHN";
                case 18: return "JUD";
                case 19: return "LUK";
                case 20: return "MAT";
                case 21: return "MRK";
                case 22: return "PHM";
                case 23: return "PHP";
                case 24: return "REV";
                case 25: return "ROM";
                default: return "TIT";
            }
        }

        private string GetRandomOTBook()
        {
            var ranNum = new Random().Next(40);
            switch (ranNum)
            {
                case 0: return "1CH";
                case 1: return "1KI";
                case 2: return "1SA";
                case 3: return "2CH";
                case 4: return "2KI";
                case 5: return "2SA";
                case 6: return "AMO";
                case 7: return "DAN";
                case 8: return "DUE";
                case 9: return "ECC";
                case 10: return "EST";
                case 11: return "EXO";
                case 12: return "EZK";
                case 13: return "EZR";
                case 14: return "GEN";
                case 15: return "HAB";
                case 16: return "HAG";
                case 17: return "HOS";
                case 18: return "ISA";
                case 19: return "JDG";
                case 20: return "JER";
                case 21: return "JOB";
                case 22: return "JOL";
                case 23: return "JON";
                case 24: return "JOS";
                case 25: return "LAM";
                case 26: return "LEV";
                case 27: return "MAL";
                case 28: return "MIC";
                case 29: return "NAH";
                case 30: return "NEH";
                case 31: return "NUM";
                case 32: return "OBA";
                case 33: return "PRO";
                case 34: return "PSA";
                case 35: return "RUT";
                case 36: return "SNG";
                case 37: return "ZEC";
                default: return "ZEP";
            }
        }

        public async Task<Book?> GetBookFromFileAsync(string version, string tesFolder, string bookFolder)
        {
            var fileName = $"Bible/Texts/{tesFolder}/{bookFolder}/{version}.json";
            using (StreamReader r = new StreamReader(fileName))
            {
                string json = await r.ReadToEndAsync();
                var book = JsonConvert.DeserializeObject<Book>(json);
                return book;
            }
        }
    }
}
