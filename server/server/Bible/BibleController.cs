using MakServer.Bible.models;
using Microsoft.AspNetCore.Mvc;

namespace MakServer.Bible
{
    [ApiController]
    [Route("bible")]
    public class BibleController : ControllerBase
    {
        private readonly IBibleService _bibleService;

        public BibleController(IBibleService bibleService) {
            _bibleService = bibleService;
        }

        [HttpPost]
        [Route("random")]
        public async Task<IActionResult> GetRandomReference([FromBody] RandomRefReq req)
        {
            try
            {
                var reference = await _bibleService.GetRandomReferenceAsync();
                return Ok(reference);
            } 
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
