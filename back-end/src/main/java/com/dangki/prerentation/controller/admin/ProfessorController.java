package com.dangki.prerentation.controller.admin;

import com.dangki.data.dto.ProfessorDto;
import com.dangki.data.dto.TimeDto;
import com.dangki.service.ProfessorService;
import com.dangki.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/api/professor")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public ResponseEntity<List<ProfessorDto>> getTime()
    {
        return ResponseEntity.ok(professorService.findAll());
    }
    @PostMapping
    public ResponseEntity<?> addTime(@RequestBody ProfessorDto professorDto)
    {
        return ResponseEntity.ok(professorService.add(professorDto));
    }
    @PutMapping
    public ResponseEntity<?> updateTime(@RequestBody ProfessorDto professorDto)
    {
        return ResponseEntity.ok(professorService.update(professorDto));
    }
    @DeleteMapping
    public void deleteTime(@RequestBody List<ProfessorDto> professorDtos)
    {
        professorService.delete(professorDtos);
    }
}
