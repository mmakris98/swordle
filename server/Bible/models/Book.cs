namespace MakServer.Bible.models
{
    public class Book
    {
        public Chapter[] text { get; set; }
        public string ID { get; set; }
        public string version { get; set; }
        public string name { get; set; }
    }

    public class Chapter
    {
        public Verse[] text { get; set; }
        public string ID { get; set; }
        public string name { get; set; }
    }

    public class Verse
    {
        public string text { get; set; }
        public string ID { get; set; }
    }

}
