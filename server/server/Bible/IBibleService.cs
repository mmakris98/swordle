using MakServer.Bible.models;

namespace MakServer.Bible
{
    public interface IBibleService
    {
        Task<Reference> GetRandomReferenceAsync(string version, string testament);
    }
}
