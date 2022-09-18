using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using spa_clinic_web.Data;
using spa_clinic_web.models;

namespace spa_clinic_web.Controllers
{
    public class CustomerTestController : Controller
    {
        private readonly SpaMongoDbContext _context;

        public CustomerTestController(SpaMongoDbContext context)
        {
            _context = context;
        }

        // GET: CustomerTest
        public async Task<IActionResult> Index()
        {
            List<CustomerTest> listItems = await _context.CustomerTest.Find(_ => true).ToListAsync();
            return _context.CustomerTest != null ? 
                          View(await _context.CustomerTest.Find(_ => true).ToListAsync()) :
                          Problem("Entity set 'SpaMongoDbContext.CustomerTest'  is null.");
        }

        // GET: CustomerTest/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null || _context.CustomerTest == null)
            {
                return NotFound();
            }

            var customerTest = (await _context.CustomerTest.Find(_ => true).ToListAsync())
                .FirstOrDefault(m => m.Id == id);
            if (customerTest == null)
            {
                return NotFound();
            }

            return View(customerTest);
        }

        // GET: CustomerTest/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: CustomerTest/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,FullName,BirthDay,CreatedAt")] CustomerTest customerTest)
        {
            if (ModelState.IsValid)
            {
                await _context.CustomerTest.InsertOneAsync(customerTest);
                return RedirectToAction(nameof(Index));
            }
            return View(customerTest);
        }

        // GET: CustomerTest/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null || _context.CustomerTest == null)
            {
                return NotFound();
            }

            var customerTest = await _context.CustomerTest.Find(a => a.Id == id).FirstOrDefaultAsync();
            if (customerTest == null)
            {
                return NotFound();
            }
            return View(customerTest);
        }

        // POST: CustomerTest/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id,FullName,BirthDay,CreatedAt")] CustomerTest customerTest)
        {
            if (id != customerTest.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await _context.CustomerTest.ReplaceOneAsync(x => x.Id == id, customerTest);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CustomerTestExists(customerTest.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(customerTest);
        }

        // GET: CustomerTest/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context.CustomerTest == null)
            {
                return NotFound();
            }

            var customerTest = await _context.CustomerTest.Find(a => a.Id == id).FirstOrDefaultAsync();
            if (customerTest == null)
            {
                return NotFound();
            }

            return View(customerTest);
        }

        // POST: CustomerTest/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context.CustomerTest == null)
            {
                return Problem("Entity set 'SpaMongoDbContext.CustomerTest'  is null.");
            }
            var customerTest = await _context.CustomerTest.Find(a => a.Id == id).FirstOrDefaultAsync();
            if (customerTest != null)
            {
                _context.CustomerTest.FindOneAndDelete(e => e.Id == id);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CustomerTestExists(string id)
        {
          return (_context.CustomerTest?.Find(_ => true).ToList().Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
