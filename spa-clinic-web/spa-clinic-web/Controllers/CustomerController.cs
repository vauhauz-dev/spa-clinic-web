﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using spa_clinic_web.Models;
using spa_clinic_web.mongodb;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace spa_clinic_web.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly CustomersService _customersService;

        public CustomerController(CustomersService customersService) =>
        _customersService = customersService;

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public async Task<string> Post()
        {
            Customer cust = new Customer();
            cust.FullName = "Pedro Pica Piedra";
            await _customersService.CreateAsync(cust);
            return "OK";
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

